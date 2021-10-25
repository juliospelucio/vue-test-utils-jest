import Avaliador from '@/views/Avaliador'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { getLeiloes } from '@/http'
import flushPromises from 'flush-promises'

jest.mock('@/http')

const leiloes = [{
        "id": 1,
        "produto": "Video Game",
        "descricao": "Um video game bem bacana, com vários jogos exclusivos.",
        "lanceInicial": 1000
    },
    {
        "id": 2,
        "produto": "Notebook",
        "descricao": "Completinho, quase novo. A diversão é garantida!",
        "lanceInicial": 500
    },
    {
        "id": 3,
        "produto": "Livro da Casa do Código",
        "descricao": "Um livro super completo, sobre um assunto incrível.",
        "lanceInicial": 500
    },
    {
        "produto": "Ebook da Casa do Código",
        "descricao": "Um livro com um conteúdo muito interessante sobre VueJS",
        "lanceInicial": "500",
        "id": 4
    },
    {
        "produto": "Boina Italiana",
        "descricao": "Um belo chapéu clássico",
        "lanceInicial": "3",
        "id": 5
    }
];

describe('Um avaliador que se conecta com a API', () => {
    test('mostra todos os leilões retornados pela API', async() => {
        getLeiloes.mockResolvedValueOnce(leiloes)
        const wrapper = mount(Avaliador, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        await flushPromises()
        const totalLeiloesExibidos = wrapper.findAll('.leilao').length
        expect(totalLeiloesExibidos).toBe(leiloes.length)
    })
})