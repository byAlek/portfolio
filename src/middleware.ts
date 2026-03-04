import { middleware } from 'astro:i18n'
import { defineMiddleware, sequence } from 'astro:middleware'

const customLogic = defineMiddleware(async (context, next) => {
  const response = await next()
  const language = context.cookies.get('language')

  if (context.url.pathname === '/' && language?.value) {
    return context.redirect(`/${language.value}`, 302)
  }

  return response
})

export const onRequest = sequence(
  customLogic,
  middleware({
    prefixDefaultLocale: true,
    redirectToDefaultLocale: true,
    fallbackType: 'redirect',
  })
)
      