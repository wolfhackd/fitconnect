import {
  Activity,
  Building,
  Calendar,
  CreditCard,
  Scan,
  UserCheck,
  UserPlus,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { FinancialChart } from '@/components/dashboard/FinancialChart';
import { RecentRegistrations } from '@/components/dashboard/RecentRegistrations';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Dashboard = () => {
  const [AlunosPresentes, setAlunosPresentes] = useState(0);
  const [NovosAlunosMensal, setNovosAlunosMensal] = useState(0);
  const [NovosAlunosSemanal, setNovosAlunosSemanal] = useState(0);
  const [TotalDeAlunos, setTotalDeAlunos] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-100 to-blue-200/20 p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="bg-[linear-gradient(135deg,hsl(214,84%,56%)_0%,hsl(25,95%,58%)_100%)] bg-clip-text font-bold text-4xl text-transparent">
              FitTracker Pro
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Sistema de Gestão de Academia
            </p>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button className="cursor-pointer bg-[linear-gradient(135deg,hsl(214,84%,56%)_0%,hsl(214,84%,66%)_100%)] shadow-[0_0_20px_rgba(54,113,232,0.4)] hover:opacity-90">
              <UserPlus className="mr-2 h-4 w-4" />
              Cadastrar Aluno
            </Button>

            <Button className="cursor-pointer shadow-md" variant="secondary">
              <Building className="mr-2 h-4 w-4" />
              Cadastrar Funcionário
            </Button>

            <Button
              className="cursor-pointer shadow-md hover:bg-[linear-gradient(135deg,hsl(25,95%,58%)_0%,hsl(45,93%,47%)_100%)] hover:text-white hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]"
              variant="outline"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Criar Plano
            </Button>

            <Button className="cursor-pointer bg-[linear-gradient(135deg,hsl(25,95%,58%)_0%,hsl(45,93%,47%)_100%)] shadow-[0_0_20px_rgba(251,146,60,0.4)] transition duration-700 hover:scale-110 hover:opacity-90">
              <Scan className="mr-2 h-4 w-4" />
              Liberar Catraca
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            className={'bg-blue-400'}
            icon={<Activity className="h-4 w-4" />}
            title="Alunos Presentes"
            value={30}
          />
          <StatsCard
            className={
              'border-[#F7882A]/20 bg-gradient-to-r from-[#F7882A] to-[#E9AB0C] text-white shadow-md'
            }
            icon={<UserPlus className="h-4 w-4" />}
            title="Novos Esta Semana"
            value={30}
          />
          <StatsCard
            className={
              'border-[#24C760]/20 bg-gradient-to-r from-[#24C760] to-[#39DC74] text-white shadow-md'
            }
            icon={<Calendar className="h-4 w-4" />}
            title="Novos Este Mês"
            value={30}
          />
          <StatsCard
            className={
              'border-purple-300/20 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
            }
            icon={<Users className="h-4 w-4" />}
            title="Total de Alunos"
            value={30}
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Financial Chart - 2/3 width */}
          <div className="lg:col-span-2">
            <FinancialChart
            //   data={dashboard.dadosGrafico}
            //   loading={dashboard.loading}
            />
          </div>

          {/* Recent Registrations - 1/3 width */}
          <div className="lg:col-span-1">
            {/* <RecentRegistrations
              data={dashboard.ultimosCadastros}
              loading={dashboard.loading}
            /> */}
            <RecentRegistrations />
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button
                className="flex h-20 flex-col gap-2"
                // onClick={() => setCadastroAlunoOpen(true)}
                variant="outline"
              >
                <UserPlus className="h-6 w-6" />
                <span className="text-sm">Novo Aluno</span>
              </Button>

              <Button className="flex h-20 flex-col gap-2" variant="outline">
                <Building className="h-6 w-6" />
                <span className="text-sm">Novo Funcionário</span>
              </Button>

              <Button className="flex h-20 flex-col gap-2" variant="outline">
                <CreditCard className="h-6 w-6" />
                <span className="text-sm">Novo Plano</span>
              </Button>

              <Button
                className="flex h-20 flex-col gap-2"
                // onClick={() => setCatracaOpen(true)}
                variant="outline"
              >
                <Scan className="h-6 w-6" />
                <span className="text-sm">Catraca</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
