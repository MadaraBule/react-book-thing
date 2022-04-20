import { Card } from 'react-bootstrap'
import horror from '../data/horror.json'

export default function MyBooks() {
    console.log(horror)

    return <div className="d-flex flex-wrap">{
        horror.map(book => {
            return <Card className="book-cover">
                < Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>
                        {book.title}
                    </Card.Title>
                </Card.Body>
            </Card>
        })
    }</div >
}