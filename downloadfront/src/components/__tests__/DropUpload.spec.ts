import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import DropUpload from '@/components/DropUpload'
import ElementPlus from 'element-plus'

describe('DropUpload', () => {
  const wrapper = mount(DropUpload, {
    global: {
      plugins: [ElementPlus],
    },
  })
  const input = wrapper.find('input[type="file"]')

  it("input[type='file']正常渲染", async () => {
    expect(input.exists()).toBeTruthy()
  })
  it('拿到file对象', async () => {
    const dummyFile = new File(['dummy file content'], 'my.txt', {
      type: 'text/plain',
    })
    const fileList = [dummyFile]
    // const event = new Event('change', { bubbles: true })
    // Object.defineProperty(event, 'target', {
    //   writable: false,
    //   value: { files: fileList },
    // })
    // input.element.dispatchEvent(event)
    Object.defineProperty(input.element, 'files', {
      value: fileList,
      writable: true,
    })
    await input.trigger('change');
    expect(input.element.files[0]).toBeInstanceOf(File)
  })

  it('拿到切片数', () => {})

  it('拿到用户线程数', () => {})
})
