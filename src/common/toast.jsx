export const showToast = (toast, title, description, status) => {
  return toast({
    position: 'bottom',
    title: title,
    description: description,
    status: status,
    duration: 9000,
    isClosable: true,
    variant:'solid'
  })
}
