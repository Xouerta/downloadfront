import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm' // 调整为你的组件正确路径

describe('LoginForm', () => {
  const wrapper = mount(LoginForm)
  const inputs = wrapper.findAll('el-input')
  const button = wrapper.find("el-button")

  it('LoginForm正常渲染', async () => {
    expect(wrapper.findAll('el-input').length).toEqual(2)
  })

  it("点击按钮后input框不能为空", async() => {
    inputs[0].element.textContent = ""
    inputs[1].element.textContent = ""

    const onSubmitSpy = vi.spyOn(wrapper.vm, "onSubmit" as never)
    await button.trigger('click')
    expect(onSubmitSpy).not.toBeCalled()
  })

  it("点击按钮后调用onSubmit函数", async() => {
    // 监听onSubmit函数
    const onSubmitSpy = vi.spyOn(wrapper.vm, "onSubmit" as never)
    await button.trigger('click')
    expect(onSubmitSpy).toHaveBeenCalledOnce()
  })
})
