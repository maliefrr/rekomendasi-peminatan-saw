import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

interface PdfData {
  matkul: {
    semester: number;
    matkul: string[];
  }[];
  nilai: {
    [course: string]: string;
  };
  recomendedSpeciality: string;
  nama : string;
  nim : string;
  peminatan : string;
}

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: '1cm',
  },
  table: {
    width: '100%',
    border: '1pt solid black',
    marginBottom: '1cm',
  },
  row: {
    flexDirection: 'row',
    borderBottom: '1pt solid black',
    alignItems: 'center',
    height: '1.5cm',
    fontSize: 10,
  },
  cell: {
    width: '50%',
    padding: '0.2cm',
  },
  headerCell: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  mb3 : {
    marginBottom: 16
  }
});

const GeneratedPdf: React.FC<PdfData> = ({ matkul, nilai, recomendedSpeciality, nama, nim, peminatan }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.mb3}>Nama: {nama}</Text>
          <Text style={styles.mb3}>NIM: {nim}</Text>
          <Text style={styles.mb3}>Peminatan yang diminati: {peminatan}</Text>
          <View style={styles.table}>
            <View style={[styles.row, styles.headerCell]}>
              <Text style={styles.cell}>Mata Kuliah</Text>
              <Text style={styles.cell}>Nilai</Text>
            </View>
            {matkul.map(({ matkul: mataKuliahList }) =>
              mataKuliahList.map(course => (
                <View style={styles.row} key={course}>
                  <Text style={styles.cell}>{course}</Text>
                  <Text style={styles.cell}>{nilai[course]}</Text>
                </View>
              ))
            )}
          </View>
          <Text>Berdasarkan nilai pada tabel {nama} cocok untuk peminatan {recomendedSpeciality}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default GeneratedPdf;
