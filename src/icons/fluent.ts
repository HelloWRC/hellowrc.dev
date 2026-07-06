import add24Regular from '@fluentui/svg-icons/icons/add_24_regular.svg?raw'
import book24Regular from '@fluentui/svg-icons/icons/book_24_regular.svg?raw'
import chevronRight20Regular from '@fluentui/svg-icons/icons/chevron_right_20_regular.svg?raw'
import link24Regular from '@fluentui/svg-icons/icons/link_24_regular.svg?raw'
import person24Regular from '@fluentui/svg-icons/icons/person_24_regular.svg?raw'
import bilibili from '../assets/bilibili.svg?raw'
import github from '../assets/github.svg?raw'

export const fluentIcons = {
  add24Regular,
  book24Regular,
  chevronRight20Regular,
  link24Regular,
  person24Regular,
  bilibili,
  github
} as const

export type FluentIconName = keyof typeof fluentIcons
