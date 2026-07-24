import { defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { firebase } from '../../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const getUserProgress = defineAction({
  accept: 'json',
  input: z.object({
    uid: z.string(),
  }),
  handler: async ({ uid }) => {
    try {
      const progressRef = collection(firebase.db, 'user_progress')
      const q = query(progressRef, where('uid', '==', uid))
      const snapshot = await getDocs(q)

      const progress: Record<string, number> = {}

      snapshot.forEach((doc) => {
        const data = doc.data()
        progress[data.courseSlug] = data.completedModules ?? 0
      })

      return { progress }
    } catch (error) {
      console.error('Error fetching progress:', error)
      return { progress: {} }
    }
  },
})
