import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
describe('HelloWorld', () => {
  it('get all character length', () => {
    const wrapper = mount(HelloWorld)
    wrapper.setData({ N: 5, M:2 })
    expect(wrapper.vm.getAllCharacter().length).toBe(10)
    wrapper.vm.getRenderArray()
    expect(wrapper.vm.arr.length).toBe(2)
    expect(wrapper.vm.arr[0].length).toBe(5)
  })
  it('get arr length', () => {
    const wrapper = mount(HelloWorld)
    wrapper.setData({ N: 10, M:20 })
    wrapper.vm.getRenderArray()
    expect(wrapper.vm.arr.length).toBe(20)
    expect(wrapper.vm.arr[0].length).toBe(10)
  })
})
