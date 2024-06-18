import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const FormFatura = () => {
    const [invoiceData, setInvoiceData] = useState({
        numeroFatura: '',
        nomeCliente: '',
        dataVencimento: '',
        valorNota: '',
        dataPagamento: '',
        status: ''
    });

    const [faturaFile, setFaturaFile] = useState<File | null>(null);
    const [boletoFile, setBoletoFile] = useState<File | null>(null);

    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:3000/invoices', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erro ao buscar dados da fatura:', error);
        }
    };

    fetchUserData();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInvoiceData({
            ...invoiceData,
            [name]: value
        });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            if (name === "faturaFile") {
                setFaturaFile(files[0]);
            } else if (name === "boletoFile") {
                setBoletoFile(files[0]);
            }
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("numeroFatura", invoiceData.numeroFatura);
        formData.append("nomeCliente", invoiceData.nomeCliente);
        formData.append("dataVencimento", invoiceData.dataVencimento);
        formData.append("valorNota", invoiceData.valorNota);
        formData.append("dataPagamento", invoiceData.dataPagamento);
        formData.append("status", invoiceData.status);
        if (faturaFile) formData.append("faturaFile", faturaFile);
        if (boletoFile) formData.append("boletoFile", boletoFile);

        try {
            const response = await fetch("http://localhost:3000/invoices", {
                method: "POST",
                body: formData,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar fatura');
            }

            const result = await response.json();
            console.log(result);
            setInvoiceData({
                numeroFatura: '',
                nomeCliente: '',
                dataVencimento: '',
                valorNota: '',
                dataPagamento: '',
                status: ''
            })
        } catch (error) {
            console.error('Erro ao cadastrar fatura:', error);
            alert('Erro ao cadastrar fatura')
        }
    };

    return (
        <div className="bg-white w-[700px] h-[500px] p-3 rounded-2xl">
            <div className="w-full h-1 flex justify-center text-black font-semibold">
                <h1>Cadastrar Fatura</h1>
            </div>
            <form className="h-full w-full flex flex-col flex-wrap justify-around items-center font-semibold" onSubmit={handleSubmit}>

                <div className="flex flex-col justify-evenly h-full">

                    <div className="flex flex-col text-black">
                        <label htmlFor="numeroFatura">Número da Fatura:</label>
                        <input
                            type="text"
                            name="numeroFatura"
                            value={invoiceData.numeroFatura}
                            onChange={handleChange}
                            placeholder="Ex: 'FAT002'"
                            className="text-orange-500 rounded-2xl border-2 border-orange-500 p-2"
                        />
                    </div>

                    <div className="flex flex-col text-black">
                        <label htmlFor="nomeCliente">Nome Cliente:</label>
                        <input
                            type="text"
                            name="nomeCliente"
                            value={invoiceData.nomeCliente}
                            onChange={handleChange}
                            className="text-orange-500 rounded-2xl border-2 border-orange-500 p-2"
                        />
                    </div>

                    <div className="flex flex-col text-black">
                        <label htmlFor="dataVencimento">Data de vencimento:</label>
                        <input
                            type="date"
                            name="dataVencimento"
                            value={invoiceData.dataVencimento}
                            onChange={handleChange}
                            className="text-orange-500 rounded-2xl border-2 border-orange-500 p-2"
                        />
                    </div>

                    <div className="flex flex-col text-black">
                        <label htmlFor="valorNota">Valor da nota:</label>
                        <input
                            type="number"
                            name="valorNota"
                            value={invoiceData.valorNota}
                            onChange={handleChange}
                            placeholder="Ex: 5000"
                            className="text-orange-500 rounded-2xl border-2 border-orange-500 p-2"
                        />
                    </div>

                    <div className="flex flex-col text-black">
                        <label htmlFor="dataPagamento">Data Pagamento:</label>
                        <input
                            type="date"
                            name="dataPagamento"
                            value={invoiceData.dataPagamento}
                            onChange={handleChange}
                            className="text-orange-500 rounded-2xl border-2 border-orange-500 p-2"
                        />
                    </div>

                </div>

                <div className="flex flex-col justify-evenly h-full w-52">

                    <div className="flex flex-col text-black">
                        <label htmlFor="status">Status:</label>
                        <select
                            name="status"
                            value={invoiceData.status}
                            onChange={handleChange}
                            className="text-orange-500 rounded-2xl border-2 border-orange-500 p-2 hover:cursor-pointer "
                        >
                            <option value="">Selecione</option>
                            <option value="EMITIDO">EMITIDO</option>
                            <option value="COBRADA">COBRADA</option>
                            <option value="VENCIDA">VENCIDA</option>
                            <option value="PAGO">PAGO</option>
                        </select>
                    </div>

                    <div className="flex flex-col text-black">
                        <label htmlFor="faturaFile">Salvar Fatura:</label>
                        <input
                            type="file"
                            name="faturaFile"
                            onChange={handleFileChange}
                            className="text-orange-500 rounded-2xl border-2 border-orange-500 p-2"
                        />
                    </div>

                    <div className="flex flex-col text-black">
                        <label htmlFor="boletoFile">Salvar Boleto:</label>
                        <input
                            type="file"
                            name="boletoFile"
                            onChange={handleFileChange}
                            className="text-orange-500 rounded-2xl border-2 border-orange-500 p-2"
                        />
                    </div>

                    <div className="hover:bg-orange-400 hover:cursor-pointer bg-orange-500 p-3 rounded-lg h-14 flex items-center justify-center text-white">
                        <button className="h-full" type="submit">Cadastrar Fatura</button>
                    </div>

                </div>

            </form>
        </div>
    );
}

export default FormFatura;
