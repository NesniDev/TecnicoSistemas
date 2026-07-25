import type { APIRoute } from 'astro'
import { resources } from '@lib/resources'
import { courses } from '@lib/courses'

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  const { query, type } = body

  if (!query || query.length < 2) {
    return new Response(JSON.stringify({ suggestions: [] }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const normalizeText = (text: string) =>
    text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

  const searchTerm = normalizeText(query)

  let suggestions: { title: string; type?: string; category?: string; slug?: string }[] = []

  if (type === 'resource') {
    suggestions = resources
      .filter((resource) =>
        normalizeText(resource.title).includes(searchTerm)
      )
      .slice(0, 5)
      .map((resource) => ({
        title: resource.title,
        type: resource.type,
        category: resource.category,
      }))
  } else if (type === 'course') {
    suggestions = courses
      .filter((course) =>
        normalizeText(course.title).includes(searchTerm)
      )
      .slice(0, 5)
      .map((course) => ({
        title: course.title,
        slug: course.slug,
        category: course.category,
      }))
  }

  return new Response(JSON.stringify({ suggestions }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
