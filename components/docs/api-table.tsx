import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface ApiTableRow {
  prop: string
  type: string
  default?: string
  description: string
}

export function ApiTable({ data }: { data: ApiTableRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.prop}>
            <TableCell className='font-mono'>{row.prop}</TableCell>
            <TableCell className='font-mono text-muted-foreground'>
              {row.type}
            </TableCell>
            <TableCell className='font-mono'>{row.default ?? '—'}</TableCell>
            <TableCell>{row.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
