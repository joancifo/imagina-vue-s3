import { config, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { useUsuarisStore } from '@/stores/usuarisStore'

import UsuariLlistaView from '@/views/Usuari/UsuariLlistaView.vue'
import App from '@/App.vue'

/** pot ser comú a tots els testos  */
import router from '@/router'
import { createPinia, setActivePinia } from 'pinia'

config.global.plugins = [router]
const pinia = createPinia()
setActivePinia(pinia)

const usuarisStore = useUsuarisStore()
/** end */

describe('UsuariLlistaView', () => {
  it('mostra un spinner de loading', () => {
    const wrapper = mount(UsuariLlistaView)

    expect(wrapper.text()).toContain('Carregant, spinner, etc')
  })

  it('mostra els usuaris carregats', () => {
    const spyFetch = vi.spyOn(usuarisStore, 'carregarUsuarisAxios').mockReturnValue([])

    mount(App)

    usuarisStore.usuaris = [{ id: 10, name: 'Joan' }]

    const wrapper = mount(UsuariLlistaView)

    expect(spyFetch).toBeCalled()
    expect(wrapper.text()).toContain('Joan')
  })
})
