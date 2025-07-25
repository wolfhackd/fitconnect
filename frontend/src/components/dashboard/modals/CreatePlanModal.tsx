import { zodResolver } from '@hookform/resolvers/zod';
import { CreditCard, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface CreatePlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const createPlanSchema = z.object({
  nome: z.string().min(3, 'O Nome deve conter ao menos 3 caracteres'),
  valor: z.number('Digite um Valor').min(1, 'O Valor é inválido'),
  duracao_dias: z.number('Digite um valor').min(1, 'Duração deve ser positiva'),
  tipo: z.enum(['mensal', 'trimestral', 'semestral', 'anual'], {
    error: 'Escolha umas das opções',
  }),
  descricao: z.string().min(1, 'Descrição é obrigatória'),
  beneficios: z.string().min(1, 'Benefícios são obrigatórios'),
});

type CreatePlanForm = z.infer<typeof createPlanSchema>;

export const CreatePlanModal = ({
  open,
  onOpenChange,
}: CreatePlanModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<CreatePlanForm>({
    resolver: zodResolver(createPlanSchema),
  });

  const tipoSelecionado = watch('tipo');

  const onSubmit = (data: CreatePlanForm) => {
    setLoading(true);
    try {
      alert('Aluno registrado');
      //se ok lançar um toast tbm
    } finally {
      setLoading(false);
      onOpenChange(false);
      reset();
    }
  };

  const handleTipoChange = (tipo: string) => {
    setValue('tipo', tipo as any);

    // biome-ignore lint/style/useDefaultSwitchClause: <test>
    switch (tipo) {
      case 'mensal':
        setValue('duracao_dias', 30);
        break;
      case 'trimestral':
        setValue('duracao_dias', 90);
        break;
      case 'semestral':
        setValue('duracao_dias', 180);
        break;
      case 'anual':
        setValue('duracao_dias', 365);
        break;
    }
  };

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto overflow-x-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Criar Novo Plano
          </DialogTitle>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <h3 className="font-semibold text-blue-500 text-lg">
                Informações do Plano
              </h3>
              <div>
                <Label htmlFor="nome">Nome do Plano *</Label>
                <Input
                  id="nome"
                  {...register('nome')}
                  placeholder="Plano Premium"
                />
                {errors.nome && (
                  <p className="mt-1 text-destructive text-sm">
                    {errors.nome.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="valor">Valor (R$) *</Label>
                <Input
                  id="valor"
                  placeholder="99.90"
                  step="0.01"
                  {...register('valor', { valueAsNumber: true })}
                  type="number"
                />
                {errors.valor && (
                  <p className="mt-1 text-destructive text-sm">
                    {errors.valor.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <Label htmlFor="tipo">Tipo *</Label>
                <Select
                  onValueChange={handleTipoChange}
                  value={tipoSelecionado || ''}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mensal">Mensal (30 dias)</SelectItem>
                    <SelectItem value="trimestral">
                      Trimestral (90 dias)
                    </SelectItem>
                    <SelectItem value="semestral">
                      Semestral (180 dias)
                    </SelectItem>
                    <SelectItem value="anual">Anual (365 dias)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.tipo && (
                  <p className="mt-1 text-destructive text-sm">
                    {errors.tipo.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="duracao_dias">Duração (dias) *</Label>
              <Input
                id="duracao_dias"
                placeholder="30"
                {...register('duracao_dias', { valueAsNumber: true })}
                readOnly={!!tipoSelecionado}
                type="number"
              />
              {errors.duracao_dias && (
                <p className="mt-1 text-destructive text-sm">
                  {errors.duracao_dias.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="descricao">Descrição *</Label>
              <Textarea
                id="descricao"
                {...register('descricao')}
                placeholder="Acesso completo à musculação..."
                rows={3}
              />
              {errors.descricao && (
                <p className="mt-1 text-destructive text-sm">
                  {errors.descricao.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="beneficios">Benefícios *</Label>
              <Textarea
                id="beneficios"
                {...register('beneficios')}
                placeholder="Musculação, Vestiário, Aulas (separar por vírgula)"
                rows={3}
              />
              {errors.beneficios && (
                <p className="mt-1 text-destructive text-sm">
                  {errors.beneficios.message}
                </p>
              )}
              <p className="mt-1 text-muted-foreground text-xs">
                Separe os benefícios por vírgula (ex: Musculação, Aulas,
                Vestiário)
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-6">
              <Button
                className="cursor-pointer"
                disabled={loading}
                onClick={() => onOpenChange(false)}
                type="button"
                variant="outline"
              >
                Cancelar
              </Button>
              <Button
                className="cursor-pointer bg-[#EF9C1D] hover:opacity-90"
                disabled={loading}
                type="submit"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Criar Plano
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
