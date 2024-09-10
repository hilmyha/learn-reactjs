type MedaliProps = {
  children: React.ReactNode;
};

export const Medali = (props: MedaliProps) => {
  return <div>{props.children}</div>;
};

// explain this code
/**
 * Kode di atas adalah contoh penggunaan React.Children API. React.Children API adalah API yang digunakan untuk memanipulasi children dari sebuah komponen. Pada kode di atas, kita membuat komponen Medali yang menerima props children dengan tipe React.ReactNode. React.ReactNode adalah tipe data yang digunakan untuk merepresentasikan children dari sebuah komponen. Pada komponen Medali, kita mengembalikan children yang diterima dari props. Dengan menggunakan React.Children API, kita dapat memanipulasi children dari sebuah komponen, misalnya dengan menambahkan props atau melakukan validasi terhadap children tersebut.
 */