import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { uid, email, displayName, photoURL } = await request.json()

    if (!uid) {
      return new Response(JSON.stringify({ error: 'Missing uid' }), { status: 400 })
    }

    const sessionData = JSON.stringify({ uid, email, displayName, photoURL })

    cookies.set('session', sessionData, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    })

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err: any) {
    console.error('Session error:', err.message)
    return new Response(JSON.stringify({ error: 'Session failed' }), { status: 500 })
  }
}
