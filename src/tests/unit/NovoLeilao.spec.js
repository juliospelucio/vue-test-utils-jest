import NovoLeilao from '@/views/NovoLeilao'
import { mount } from '@vue/test-utils'
import { createLeilao } from '@/http'
import flushPromises from 'flush-promises'

jest.mock('@/http')

const $router = {
    push: jest.fn()
}

describe('Um novo leilao deve ser criado', () => {
    test('dado o formulario preenchido, um leilaodeve ser criado', () => {
        createLeilao.mockResolvedValueOnce()

        const wrapper = mount(NovoLeilao, {
            mocks: {
                $router
            }
        })

        wrapper.find('.produto').setValue('Um livro dda casa do código')
        wrapper.find('.descricao').setValue('Conteúdo de primeira')
        wrapper.find('.valor').setValue(50)
        wrapper.find('form').trigger('submit')

        expect(createLeilao).toHaveBeenCalled()

    })
})