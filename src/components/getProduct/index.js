import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../services';
import { blankImage } from '../../assets';
import { Spinner, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Productasc = (props) => {
  const { data } = props;

  return (
    <div className="col">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={blankImage} style={{ height: '200px' }} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <p className="normal_price">{data.display_normal_price}</p>
          <p className="price">{data.display_price}</p>
          <Link to={`/product/${data.id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

const ProductGet = () => {
  const [product, setProduct] = useState([]);
  const [limit, setLimit] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [onSearch, setonSearch] = useState(false);
  const [isLoginLoading, setisLoginLoading] = useState(false);

  const onSubmitSearch = () => {
    // console.log(limit, search);
    setIsLoading(true);
    setProduct([]);
    auth
      .product(limit, search)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setonSearch(true);
    console.log(product);
  };

  return (
    <div className="container-fluid">
      <div className="loginPage">
        <h2>Shopping Page</h2>
        <form
          className="login_form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitSearch();
          }}
        >
          <label htmlFor="limit">
            limit :
            <input
              type="number"
              min="10"
              defaultValue="10"
              value={limit}
              onChange={(e) => {
                setLimit(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            search :
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </label>
          <input type="submit" value="Submit" disabled={isLoginLoading} />
        </form>
      </div>
      <div className="container-fluid">
        <div className="row">
          {onSearch ? (
            isLoading ? (
              <div className="mx-auto">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            ) : (
              product.map((product) => {
                return (
                  <div className="col">
                    <Productasc key={product.id} data={product} />
                  </div>
                );
              })
            )
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGet;
