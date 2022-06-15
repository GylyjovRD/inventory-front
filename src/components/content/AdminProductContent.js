import React, {useState} from 'react';
import TableCard from '../cards/TableCard';

import LineChartCard from '../cards/LineChartCard';
import BarChartCard from '../cards/BarChartCard';
import { Colors } from '../../assets/colorList';
import AdminProductTable from '../cards/AdminProductTable';

const StockList = [
    {
        "id": 1,
        "title": "Stock 1",
        "total_balance": "0.00"
    },
    {
        "id": 2,
        "title": "Stock 2",
        "total_balance": "0.00"
    },
    {
        "id": 3,
        "title": "Stock 3",
        "total_balance": "0.00"
    }
]

const ProductData = [
    {
        "id": 1,
        "title": "Product 1",
        "price": "23.00",
        "description": "Description for porduct 1",
        "image": "/media/product_images/6-39-Amoled-Xiaomi-Mix-3_WrqBBkx.webp",
        "category": 1,
        "unit": 1,
        "productstock_product": [
            {
                "id": 1,
                "quantity": 14,
                "created_at": "2022-04-07T09:40:05.798962Z",
                "updated_at": "2022-04-09T13:06:48.854118Z",
                "stock_id": 1,
                "product_id": 1
            },
            {
                "id": 18,
                "quantity": 12,
                "created_at": "2022-04-07T09:43:30.915019Z",
                "updated_at": "2022-04-07T09:43:30.915051Z",
                "stock_id": 3,
                "product_id": 1
            },
            {
                "id": 25,
                "quantity": 0,
                "created_at": "2022-04-09T12:35:37.737051Z",
                "updated_at": "2022-04-09T12:35:37.737087Z",
                "stock_id": 2,
                "product_id": 1
            }
        ]
    },
    {
        "id": 2,
        "title": "Product 2",
        "price": "24.50",
        "description": "Description for product 2",
        "image": "/media/product_images/28-IPS-144-4k.jpg_640x640.webp",
        "category": 1,
        "unit": 1,
        "productstock_product": [
            {
                "id": 2,
                "quantity": 18,
                "created_at": "2022-04-07T09:40:16.824530Z",
                "updated_at": "2022-04-09T13:06:48.871567Z",
                "stock_id": 1,
                "product_id": 2
            },
            {
                "id": 11,
                "quantity": 9,
                "created_at": "2022-04-07T09:42:06.604965Z",
                "updated_at": "2022-04-09T09:20:29.372509Z",
                "stock_id": 2,
                "product_id": 2
            }
        ]
    },
    {
        "id": 3,
        "title": "Product 3",
        "price": "45.20",
        "description": "Description for product 3",
        "image": "/media/product_images/Apple-iPhone-7-Plus-3-32-128-256.png_640x640.webp",
        "category": 2,
        "unit": 1,
        "productstock_product": [
            {
                "id": 3,
                "quantity": 11,
                "created_at": "2022-04-07T09:40:30.362498Z",
                "updated_at": "2022-04-08T12:16:20.185250Z",
                "stock_id": 1,
                "product_id": 3
            },
            {
                "id": 12,
                "quantity": 2,
                "created_at": "2022-04-07T09:42:16.869535Z",
                "updated_at": "2022-04-08T12:15:10.816576Z",
                "stock_id": 2,
                "product_id": 3
            },
            {
                "id": 19,
                "quantity": 12,
                "created_at": "2022-04-07T09:43:45.363526Z",
                "updated_at": "2022-04-07T09:43:45.363576Z",
                "stock_id": 3,
                "product_id": 3
            }
        ]
    },
    {
        "id": 4,
        "title": "Product 4",
        "price": "38.50",
        "description": "Description for product 4",
        "image": "/media/product_images/BBEN-G16-i7-7700HQ-15-6.webp",
        "category": 2,
        "unit": 1,
        "productstock_product": [
            {
                "id": 4,
                "quantity": 12,
                "created_at": "2022-04-07T09:40:46.948125Z",
                "updated_at": "2022-04-07T09:40:46.948168Z",
                "stock_id": 1,
                "product_id": 4
            },
            {
                "id": 13,
                "quantity": 12,
                "created_at": "2022-04-07T09:42:40.918294Z",
                "updated_at": "2022-04-07T09:42:40.918328Z",
                "stock_id": 2,
                "product_id": 4
            },
            {
                "id": 20,
                "quantity": 12,
                "created_at": "2022-04-07T09:43:55.893886Z",
                "updated_at": "2022-04-07T09:43:55.893930Z",
                "stock_id": 3,
                "product_id": 4
            }
        ]
    },
    {
        "id": 5,
        "title": "Product 5",
        "price": "55.00",
        "description": "Description for product 5",
        "image": "/media/product_images/4GDDR-64-CHU-WI-64-10-1-Windows-10-Z8300-CWI-515.png_640x640.webp",
        "category": 3,
        "unit": 1,
        "productstock_product": [
            {
                "id": 5,
                "quantity": 12,
                "created_at": "2022-04-07T09:40:58.959176Z",
                "updated_at": "2022-04-07T09:40:58.959211Z",
                "stock_id": 1,
                "product_id": 5
            },
            {
                "id": 14,
                "quantity": 12,
                "created_at": "2022-04-07T09:42:50.467008Z",
                "updated_at": "2022-04-07T09:42:50.467087Z",
                "stock_id": 2,
                "product_id": 5
            },
            {
                "id": 21,
                "quantity": 12,
                "created_at": "2022-04-07T09:44:07.926156Z",
                "updated_at": "2022-04-07T09:44:07.926194Z",
                "stock_id": 3,
                "product_id": 5
            }
        ]
    },
    {
        "id": 6,
        "title": "Product 6",
        "price": "102.00",
        "description": "Description for product 6",
        "image": "/media/product_images/28-IPS-144-4k.jpg_640x640_CDETmAh.webp",
        "category": 1,
        "unit": 1,
        "productstock_product": [
            {
                "id": 6,
                "quantity": 11,
                "created_at": "2022-04-07T09:41:10.558323Z",
                "updated_at": "2022-04-08T12:18:16.218078Z",
                "stock_id": 1,
                "product_id": 6
            },
            {
                "id": 22,
                "quantity": 12,
                "created_at": "2022-04-07T09:44:17.225779Z",
                "updated_at": "2022-04-07T09:44:17.225811Z",
                "stock_id": 3,
                "product_id": 6
            }
        ]
    },
    {
        "id": 7,
        "title": "Product 7",
        "price": "33.00",
        "description": "Description for product 7",
        "image": "/media/product_images/80-mp3-5.jpg_640x640.webp",
        "category": 2,
        "unit": 1,
        "productstock_product": []
    },
    {
        "id": 8,
        "title": "Product 8",
        "price": "22.00",
        "description": "Description for product 8",
        "image": "/media/product_images/Apple-iPhone-XR-6-1-3-64-128-256.png_640x640.webp",
        "category": 2,
        "unit": 1,
        "productstock_product": [
            {
                "id": 7,
                "quantity": 12,
                "created_at": "2022-04-07T09:41:22.257304Z",
                "updated_at": "2022-04-07T09:41:22.257355Z",
                "stock_id": 1,
                "product_id": 8
            },
            {
                "id": 15,
                "quantity": 12,
                "created_at": "2022-04-07T09:42:59.989440Z",
                "updated_at": "2022-04-07T09:42:59.989473Z",
                "stock_id": 2,
                "product_id": 8
            }
        ]
    }
]

const UserData = [
    {
      id: 1,
      stock: "Stock 1",
      user: "user1@gmail.com",
      sold: 655,
      totalProduct: 2360,
      cash: 700,
      date: "14.04.2022"
    },
    {
      id: 2,
      stock: "Stock 2",
      user: "user2@gmail.com",
      sold: 134,
      totalProduct: 1240,
      cash: 544,
      date: "14.04.2022"
    },
    {
      id: 3,
      stock: "Stock 3",
      user: "user3@gmail.com",
      sold: 443,
      totalProduct: 1250,
      cash: 243,
      date: "14.04.2022"
    },
    {
      id: 4,
      stock: "Stock 4",
      user: "user4@gmail.com",
      sold: 784,
      totalProduct: 2100,
      cash: 480,
      date: "14.04.2022"
    },
    {
      id: 5,
      stock: "Stock 5",
      user: "user5@gmail.com",
      sold: 123,
      totalProduct: 1994,
      cash: 899,
      date: "14.04.2022"
    },
];

const AdminProductContent = () => {
    const [cashData, setCashData] = useState({
        labels: ProductData.map((data) => data.title),
        maintenanceAspectRatio: true,
        datasets: [{
          label: "Haryt Jemi",
          barWidth: 22,
          data: ProductData.map((data) => data.price),
          backgroundColor: ["#7FB5B5", "#781F19", "#308446", "#F39F18", "#922B3E", "#999950"],
        }],
      })

    return (
        <main className='h-full overflow-y-auto md:pl-64 pt-12 w-full'>
            <div className='container grid px-4 mx-auto bg-gray-900'>
                <h2 className='my-2 text-2xl font-semibold text-center text-white'>Admin Balance Page</h2>
                <div className='w-full grid'>
                    <BarChartCard chartData={cashData} />
                </div>
                <div className='w-full mb-8 overflow-hidden rounded-lg shadow-xl'>
                    <AdminProductTable datas={ProductData} stocks={StockList} />
                </div>
            </div>
        </main>
    )
}

export default AdminProductContent;