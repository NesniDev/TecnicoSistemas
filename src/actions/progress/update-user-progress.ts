import { defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { firebase } from '../../firebase/config'
import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore'

export const updateUserProgress = defineAction({
  accept: 'json',
  input: z.object({
    uid: z.string(),
    courseSlug: z.string(),
    completedModules: z.number(),
    totalModules: z.number(),
  }),
  handler: async ({ uid, courseSlug, completedModules, totalModules }) => {
    try {
      const progressRef = collection(firebase.db, 'user_progress')
      const q = query(progressRef, where('uid', '==', uid), where('courseSlug', '==', courseSlug))
      const snapshot = await getDocs(q)

      const progressData = {
        uid,
        courseSlug,
        completedModules,
        totalModules,
        percentage: Math.round((completedModules / totalModules) * 100),
        updatedAt: new Date().toISOString(),
      }

      if (snapshot.empty) {
        const newDoc = doc(progressRef)
        await setDoc(newDoc, progressData)
      } else {
        const existingDoc = snapshot.docs[0]
        await setDoc(doc(progressRef, existingDoc.id), progressData, { merge: true })
      }

      return { success: true, percentage: progressData.percentage }
    } catch (error) {
      console.error('Error updating progress:', error)
      return { success: false, percentage: 0 }
    }
  },
})
