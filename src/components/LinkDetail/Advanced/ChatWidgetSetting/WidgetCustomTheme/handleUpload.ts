import axios from '../../../../../axios'

const handleUpload = async () => {
  try {
    const response = await axios.post('/dashboard/enterpoint/widget/logo')
  } catch (error) {}
}
