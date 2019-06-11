import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
describe('HelloWorld', () => {
  it('get all character length', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.vm.getArray(2,3).length).toBe(2)
  })
})
