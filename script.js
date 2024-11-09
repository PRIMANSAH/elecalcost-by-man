
    function formatRupiah(amount) {
        return 'Rp ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    function hitungBiaya() {
        const daya = document.getElementById('daya').value;
        const pemakaian = parseFloat(document.getElementById('pemakaian').value);
        const subsidi = document.getElementById('subsidi').value;

        if (!pemakaian || pemakaian <= 0) {
            alert("isi dulu tolol");
            return;
        }

        let tarifPerKwh;
        if (subsidi === 'subsidi') {
            if (daya == 450) tarifPerKwh = 415;
            else if (daya == 900) tarifPerKwh = 605;
            else tarifPerKwh = 1467;
        } else {
            if (daya == 450) tarifPerKwh = 1699;
            else if (daya == 900) tarifPerKwh = 1352;
            else tarifPerKwh = 1467;
        }

        const pemakaianKwh = pemakaian / 1000;
        const biayaPerJam = pemakaianKwh * tarifPerKwh;
        const biayaPerHari = biayaPerJam * 24;
        const biayaPerBulan = biayaPerHari * 30;
        const biayaPerTahun = biayaPerBulan * 12;

        document.getElementById('biayaPerJam').textContent = `Per Jam: ${formatRupiah(biayaPerJam)}`;
        document.getElementById('biayaPerHari').textContent = `Per Hari: ${formatRupiah(biayaPerHari)}`;
        document.getElementById('biayaPerBulan').textContent = `Per Bulan: ${formatRupiah(biayaPerBulan)}`;
        document.getElementById('biayaPerTahun').textContent = `Per Tahun: ${formatRupiah(biayaPerTahun)}`;
        document.getElementById('result').style.display = 'block';
    }
