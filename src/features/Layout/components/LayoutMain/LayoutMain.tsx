import { AuthLogout } from '@/app/imports/App.components'
import { AppShell, Flex, NavLink, Space, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link, Outlet } from 'react-router-dom'

export function LayoutMain() {
  const [opened] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header p="xs">
        <Title order={1}>GoChess</Title>
      </AppShell.Header>

      <AppShell.Navbar>
        <Flex direction="column" p="md" flex={1}>
          <NavLink component={Link} to="/app/game" active label="Play Game" />
          <Space flex={1} />
          <AuthLogout />
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
