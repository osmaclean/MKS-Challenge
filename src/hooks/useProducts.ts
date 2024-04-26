import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useProducts = () => {
  const queryKey = ['products']

  const queryFn = async () => {
    const response = await fetch(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC',
    )
    const json = await response.json()
    return json
  }

  const { data, error, isLoading } = useQuery(queryKey, queryFn)

  return { data, error, isLoading }
}
