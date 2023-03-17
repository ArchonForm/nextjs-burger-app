interface ReviewItem {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

interface ReviewsProps<T> {
  reviews: T[]
}

const Reviews = ({ reviews }: ReviewsProps<ReviewItem>) => {
  return (
    <div>
      <h1>Client reviews</h1>
      <div className='reviews'>
        {reviews.map(review => (
          <div key={review.id} className='review'>
            {review.id} {`${review.body.slice(0, 90)}...`}
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await response.json()
  return {
    props: {
      reviews: data.slice(0, 20),
    },
  }
}

export default Reviews
