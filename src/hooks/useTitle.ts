import { watch } from 'vue'
import { useRoute } from 'vue-router'

export function useTitle() {
  const route = useRoute()

  watch(route, () => {
    let title = 'CRM'

    if (route.meta.title) {
      title += ` - ${route.meta.title}`
    }

    document.title = title
  })
}
