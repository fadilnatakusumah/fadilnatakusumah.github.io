import { Document, Page, StyleSheet, Text, View, PDFViewer } from '@react-pdf/renderer'
import React from 'react'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

function ResumeDocument() {
  return (
    <iframe src='/assets/resume.pdf' />

  )

  return (
    <Document
      author='Muhammad Fadhilah Mulyana'
      title={`Resume for Muhammad Fadhilah Mulyana, ${new Date().getFullYear()}`}
      subject='Resume'
      keywords='Muhammad Fadhilah Mulyana, Resume, Muhamad Fadhilah Mulyana'
    >
      <Page size="A4" style={styles.page}>
        {/* <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View> */}
      </Page>
    </Document>
  )
}

export default ResumeDocument