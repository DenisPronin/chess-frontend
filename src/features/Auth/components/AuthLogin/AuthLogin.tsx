import * as Form from '@radix-ui/react-form'
import { Button, Card, Flex, Heading, TextField } from '@radix-ui/themes'

export function AuthLogin() {
  return (
    <Flex minHeight="100dvh" align="center" justify="center" p="2">
      <Card asChild>
        <Flex direction="column" gap="3" width="400px">
          <Heading as="h2" weight="bold" size="4">
            Login
          </Heading>

          <Form.Root>
            <Flex direction="column" gap="3">
              <Form.Field name="email">
                <Form.Label>Email / Username</Form.Label>
                <Form.Control asChild>
                  <TextField.Root
                    type="email"
                    required
                    placeholder="Enter your email"
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field name="password">
                <Form.Label>Password</Form.Label>
                <Form.Control asChild>
                  <TextField.Root
                    type="password"
                    required
                    placeholder="Enter your password"
                  />
                </Form.Control>
              </Form.Field>

              <Form.Submit asChild>
                <Button>Sign In</Button>
              </Form.Submit>
            </Flex>
          </Form.Root>
        </Flex>
      </Card>
    </Flex>
  )
}
