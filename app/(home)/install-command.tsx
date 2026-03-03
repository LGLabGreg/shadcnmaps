import { InstallCommand as BaseInstallCommand } from '@/components/docs/install-command'

const COMMAND = 'npx shadcn add https://shadcnmaps.com/r/usa-map.json'

export function InstallCommand() {
  return <BaseInstallCommand command={COMMAND} />
}
