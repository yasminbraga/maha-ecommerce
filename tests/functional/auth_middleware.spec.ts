import { test } from '@japa/runner'

test.group('webClient', () => {
  test('should redirect to /signin when user is not authenticated', async ({ client }) => {
    const response = await client.get('/client')

    response.assertRedirectsToRoute('signin.index')
  })
})

test.group('web', () => {
  test('should redirect to /signin when user is not authenticated', async ({ client }) => {
    const response = await client.get('admin/products')

    response.assertRedirectsToRoute('admin.login')
  })
})
