import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm' // 调整为你的组件正确路径
import route from '../LoginForm/route'
import action from '@/components/LoginForm/action'

describe('LoginForm', () => {
  const wrapper = mount(LoginForm)
  const inputs = wrapper.findAll('el-input')
  const button = wrapper.find("el-button")

  it('LoginForm正常渲染', async () => {
    expect(wrapper.findAll('el-input').length).toEqual(2)
  })

  it("点击按钮后若input框为空不发送网络请求", async() => {
    // const onSubmitSpy = vi.spyOn(wrapper.vm, "submitForm" as never)
    const onSubmitSpy = vi.spyOn(action, 'submitForm')
    const POSTSpy = vi.spyOn(route, 'POST');

    await button.trigger('click')

    expect(onSubmitSpy).toHaveBeenCalledOnce()
    expect(POSTSpy).not.toBeCalled()
  })

  it("点击按钮后调用onSubmit函数", async() => {
    // 监听onSubmit函数
    inputs[0].element.textContent = "username"
    inputs[1].element.textContent = "password"

    const onSubmitSpy = vi.spyOn(action, 'submitForm')

    await button.trigger('click')
    expect(onSubmitSpy).toHaveBeenCalledOnce()
  })
})
