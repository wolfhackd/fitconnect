import { UserCheck } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export const RecentRegistrations = () => {
  return (
    <Card className="min-h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserCheck />
          <span className="text-2xl">Últimos Cadastros</span>
        </CardTitle>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pessoa</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Um desse pra cada user */}
              <TableRow>
                <TableCell className=" flex w-full items-center gap-2 ">
                  <Avatar>
                    {/* Colocar as Primeiras Letras do Nome e sobrenome */}
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">Mauro Leal</h3>
                    <p className="text-muted-foreground">
                      mauro.costa.12.j@hotmail.com
                    </p>
                  </div>
                </TableCell>
                {/* <TableCell>
                  <Badge className="bg-blue-400">Ativo</Badge>
                </TableCell> */}
                <TableCell>
                  <Badge variant={'outline'}>14/07/2025</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
