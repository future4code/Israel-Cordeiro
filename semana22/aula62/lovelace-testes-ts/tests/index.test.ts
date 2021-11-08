import { connection, isEven } from "../src"

describe("aula introdutória de testes", () => {

  test("isEven", () => {


    expect(isEven(2)).toBe(true)
    expect(isEven(3)).toBe(false)
    expect(isEven(3.5)).toBe(false)
  })

  test("exemplos de sintaxe", () => {
    expect("bananinha").toBe("bananinha")
    // expect({}).toBe({}) // falha
    expect({}).toEqual({})
    expect(10 * 29).toBeGreaterThan(5)
    expect(10 / 29).toBeLessThanOrEqual(1)
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9]).toContain(3 + 2)
    // expect([
    //   [1,2], 
    //   [3,4]
    // ]).toContain([3,4]) // falha
    expect([
      [1, 2],
      [3, 4]
    ]).toContainEqual([3, 4])

    expect(4 * 19).not.toEqual(7)

  })

  test("conexão com o banco tem que falhar", async () => {
    try {
      const result = await connection("recipes")

    } catch (error) {
      expect(error.message).toBe("Algo deu errado =/")
    } finally {
      expect.assertions(1)
    }
  })

  afterAll(() => {
    connection.destroy()
  })
})