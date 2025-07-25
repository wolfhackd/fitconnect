import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Função para gerar as últimas 30 datas
function generateLast30DaysData() {
  const today = new Date();
  const data = []; //Vou inserir os dados aqui

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formattedDate = `${day}/${month}`;

    data.push({
      date: formattedDate,
      receitas: 0, // Aqui você pode trocar por dados reais
      despesas: 0, // Aqui também
    });
  }

  return data;
}

export function FinancialChart() {
  const data = generateLast30DaysData();

  return (
    <div className=" w-full max-w-full rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 font-semibold text-lg">
        Movimentação Financeira (30 dias)
      </h2>
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            dataKey="receitas"
            dot={{ r: 5 }}
            name="Receitas"
            stroke="#16a34a"
            type="monotone"
          />
          <Line
            dataKey="despesas"
            dot={{ r: 5 }}
            name="Despesas"
            stroke="#dc2626"
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
