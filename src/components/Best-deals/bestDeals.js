import React from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

class BestDeals extends React.Component {
    render() {
      return (
        <Table responsive>
        <thead>
            <tr>
            <th>#Flight's ID</th>
            <th>Date</th>
            <th>Start time</th>
            <th>End time</th>
            <th>From Country</th>
            <th>To Country</th>
            <th>Price</th>
            <th>Book right now ⤋</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>16, FEB</td>
            <td>8.45 a.m.</td>
            <td>10.45 a.m.</td>
            <td>MINSK, Belarus</td>
            <td>RIGA, Latvia</td>
            <td>70 $</td>
            <td><Button className="card-buttons">BOOK NOW</Button></td>
            </tr>
            <tr>
            <td>2</td>
            <td>16, FEB</td>
            <td>8.45 a.m.</td>
            <td>10.45 a.m.</td>
            <td>KIEV, Ukraine</td>
            <td>WARSAW, Poland</td>
            <td>60 $</td>
            <td><Button className="card-buttons">BOOK NOW</Button></td>
            </tr>
            <tr>
            <td>3</td>
            <td>16, FEB</td>
            <td>8.45 a.m.</td>
            <td>10.45 a.m.</td>
            <td>MOSCOW, Russia</td>
            <td>VILNIUS, Litva</td>
            <td>65 $</td>
            <td><Button className="card-buttons">BOOK NOW</Button></td>
            </tr>
            <tr>
            <td>4</td>
            <td>16, FEB</td>
            <td>8.45 a.m.</td>
            <td>10.45 a.m.</td>
            <td>MINSK, Belarus</td>
            <td>KIEV, Ukraine</td>
            <td>65 $</td>
            <td><Button className="card-buttons">BOOK NOW</Button></td>
            </tr>
            <tr>
            <td>5</td>
            <td>16, FEB</td>
            <td>8.45 a.m.</td>
            <td>10.45 a.m.</td>
            <td>TALLINN, Estonia</td>
            <td>>KIEV, Ukraine</td>
            <td>35 $</td>
            <td><Button className="card-buttons">BOOK NOW</Button></td>
            </tr>
            <tr>
            <td>6</td>
            <td>16, FEB</td>
            <td>8.45 a.m.</td>
            <td>10.45 a.m.</td>
            <td>WARSAW, Poland</td>
            <td>Amsterdam, Netherlands</td>
            <td>40 $</td>
            <td><Button className="card-buttons">BOOK NOW</Button></td>
            </tr>
        </tbody>
        </Table>
      )
    }
}

export default BestDeals;