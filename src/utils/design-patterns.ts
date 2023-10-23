import editDraftImg from '../assets/images/svg/mingcute_pencil-line.svg'
import editInactiveImg from '../assets/images/svg/tabler_square-x.svg'
import listDeleteImg from '../assets/images/svg/ci_trash-full.svg'
import listDetailImg from '../assets/images/svg/lucide_pen-square.svg'

export enum Colors {
  gray = '#3c3c3c',
  green = '#059669',
  red = '#aa2e26',
  gray2 = '#7b7b7b'
}

export interface ImageKey {
  editActive: string
  editDraft: string
  editInactive: string
}

export const Images: { [key: string]: string } = {
  editDraft: editDraftImg,
  editInactive: editInactiveImg,
  listDeleteImg: listDeleteImg,
  listDetailImg: listDetailImg
}

export const getListTextColor = (status: string) => {
  if (status === 'active') {
    return Colors.green
  } else if (status === 'inactive') {
    return Colors.red
  } else if (status === 'draft') {
    return Colors.gray2
  } else {
    return ''
  }
}
