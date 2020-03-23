// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../pages_'
import ns0 from '../../locales/sr/cases.json'
import ns1 from '../../locales/sr/measures.json'
import ns2 from '../../locales/sr/faq.json'
import ns3 from '../../locales/sr/symptoms.json'
import ns4 from '../../locales/sr/footer.json'
import ns5 from '../../locales/sr/seo.json'

const namespaces = { 'cases': ns0, 'measures': ns1, 'faq': ns2, 'symptoms': ns3, 'footer': ns4, 'seo': ns5 }

export default function Page(p){
  return (
    <I18nProvider lang="sr" namespaces={namespaces} isStaticMode>
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

export * from '../../pages_'
