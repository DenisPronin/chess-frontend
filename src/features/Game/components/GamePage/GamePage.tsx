import { Card, Flex, Heading } from '@radix-ui/themes'

export function GamePage() {
  return (
    <Flex minHeight="100vh" align="center" justify="center" className="w-full">
      <Card className="w-full max-w-md">
        <Heading as="h2" weight="bold" size="4">
          Login
        </Heading>
      </Card>
    </Flex>
  )
}
