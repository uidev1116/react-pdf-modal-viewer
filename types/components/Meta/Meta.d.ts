import type { ReactNode } from 'react'
import type { Meta as MetaType } from '../../types/meta'
export interface MetaProps {
  className?: string
  custom?: (meta: MetaType) => ReactNode
}
declare const Meta: ({ className, custom }: MetaProps) => JSX.Element
export default Meta
//# sourceMappingURL=Meta.d.ts.map
