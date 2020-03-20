// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../pages_'
import ns0 from '../../locales/de/cases.json'
import ns1 from '../../locales/de/measures.json'
import ns2 from '../../locales/de/faq.json'
import ns3 from '../../locales/de/symptoms.json'
import ns4 from '../../locales/de/footer.json'

const namespaces = { 'cases': ns0, 'measures': ns1, 'faq': ns2, 'symptoms': ns3, 'footer': ns4 }

export default function Page(p){
  return (
    <I18nProvider lang="de" namespaces={namespaces} isStaticMode>
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

export * from '../../pages_'
