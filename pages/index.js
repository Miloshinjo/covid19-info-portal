// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../pages_'
import ns0 from '../locales/en/cases.json'
import ns1 from '../locales/en/measures.json'
import ns2 from '../locales/en/faq.json'
import ns3 from '../locales/en/symptoms.json'
import ns4 from '../locales/en/footer.json'

const namespaces = { 'cases': ns0, 'measures': ns1, 'faq': ns2, 'symptoms': ns3, 'footer': ns4 }

export default function Page(p){
  return (
    <I18nProvider lang="en" namespaces={namespaces} isStaticMode>
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

export * from '../pages_'
