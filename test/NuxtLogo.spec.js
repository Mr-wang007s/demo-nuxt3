import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    console.log(1)
    console.log(2)
    expect(wrapper.vm).toBeTruthy()
  })
})
