export default {
  Query: {
    users(_: any, args: any[], { dataSources }: any) {
      return [{ name: 'Nextjs' }]
    },
    some(parent: any, args: any[], { dataSources }: any) {
      return dataSources.some.getData()
    },
  },
}
