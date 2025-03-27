import { api } from '@/features/Network'
import { ProfileUser } from './Profile.types'

export async function apiProfileFetch(): Promise<ProfileUser> {
  return api.get<ProfileUser>('profile')
}
