import { config, mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import UsuariLlistaItem from '@/components/Usuari/UsuariLlistaItem.vue'

describe('UsuariLlistaItem', () => {
  it('mostra el nom', () => {
    const wrapper = mount(UsuariLlistaItem, {
      props: {
        item: { name: 'Joan', id: 10 },
        index: 100,
        usuaris: []
      }
    })

    expect(wrapper.text()).toContain('Joan')
    expect(wrapper.text()).not.toContain('Miquel')
  })
})
