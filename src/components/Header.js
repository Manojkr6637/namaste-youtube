import React from 'react'

const header = () => {
  return (
    <div className='grid grid-flow-col m-2 p-3 shadow-lg'>
      <div className='flex col-span-2'>
         <img className='h-8 ' alt="Hambur"  src='https://www.svgrepo.com/show/316358/menu-hamburger.svg' />     
         <img className='h-8 mx-2' alt="youtube logo"  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdB5idttrtpfZkhv3Dz20jvA14SXgOCOKQiBT6_tnEyagCBi91sEJMTU8X6eLxzb5dQ&usqp=CAU' />
      </div>
      <div className='col-span-8 px-10'>
         <input type='text'
          className='w-1/2  border border-gray-600 p-2 rounded-l-full' placeholder='Search' />
         <button className='border rounded-r-full border-gray-600 px-5 py-2 bg-gray-100'> <i class="fa-solid fa-magnifying-glass"></i>Search
          </button>
      </div>
      <div className='col-span-2'>
         <img className='h-8' alt="user icon"  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEX///8AAAC8vLy0tLTZ2dn39/ft7e1NTU24uLjLy8vo6OiQkJBqamooKCjx8fGwsLBBQUGIiIiqqqp7e3s3NzcVFRVHR0cQEBBbW1t0dHQvLy/g4OBWVlagoKAdHR3CwsKyPMZ2AAAEq0lEQVRoge1b2baiMBBkCSAiqICOisj//+UcrnoN2bqyOM6D9Z4UpJdUN00UffHFF/89snzNyiRt2zZNSrbOs3/GvE6qTVHHPOpiUyXrtzM3q66Pdei7VfM+6ny70zI/sdvmb+EuzweSe8bhXIamzpIjRH3HMQnqhSl95IIB0mDcid7R9OiTINzM9r1/3595c2eVI/eMytP8rPAgj+PC6/VXXtwzVu7ke2/yON47cud+p/5E4ZT8hksQ8ji+DPbkLBD3DGvfY38Csv+xpA9Kbks/BOWeYWH7xiWxm9HjuiNMqC1RoOQhkowMMO34p1c1oKQbMtCXABw/e4fR7yjoC9fnPqdQfe7cZ1BnbyGjDtdqbMfqigntH+zM5Am6zyl9XZx5ekKXmaUmmOQ6MXEOHbawN5Gn0BZXlfnYFVpr0PkZZHVd0oJS5E4fdZDVR+3yEVmutzxSq5n8Bnn6o25xCSxuDeRR1AI76CrcM720M5JHEeD6Z/XKnE4bNZWps5rc46BW2Fv6uem6FDD9VrmQDjdjrniAzlfKdNvQT420BICEpZJ49LIbogybm9NL0O66AcijaEPuowoc2mBqdxFBO6/CfdbkIrAcA/SJ3NWkQ6XGWqFrOuTlwKX1nOF64gFclLK+o50FrUZoUSy5LyCkw7FL0jqnrXUET56+p2sx1QMu32MNmBzQhqL/AnFywGrwAVDYYuwiymKC2CdgJ1FhIKIIq4ERcSkGPKKla4iddl/5nkEUGXT0yMFL6hBiPwHsUFHlxA50nrBul8iO1VD0y2P1pGh3sHjVFzJ3QOWM7PNIvM8wf+1y3QXtWdQmicGQaJshbgLk+TsM/W68py7meeCOe0J3+OixK+44m0bZXnXVZhYdTrl1RmubF/pUXJ6lNo1lWZrb9en6cXg9QDaMdk1tWdfB3aoniq4t2cDKtrPubsqaFnb6AFBI8/BfBHRQlcJgxy0AVHUc1JYv9tuk7VT1Qt+1yXYPuYCqUQ/U77tHoskm8So7TY/qugRafspCnFp34V2Vja/XLEY+bydUvlW3ionSVw7SnJVTyWSVT6QOdSFu7Fn1Nh9TB1P8aHpWpn7d2W6MpzFtpVmjv6TITxoS9Kev1Se6+s9lfEUnFLV9Wl2udxue0KglfcNR3XZwHZxRvoupAaI6LnNX2gRVjWA0ohwq9g73gux65l6rdFpYh1AHSTARVhQsT7bEzRAb5sT3ONFTfUelbLdb2Ir6FEFjoRpoH+Klde0/JtlwZw98g+YPy8ffn+DOEjIjJ3I8ZrScN+OqEt8BTe7igse9ONNjXTIduCYOPHMS5Zw48hnP5BL3xWLSjO++uLseH7xWc2b8nNXRLe4aTi34jHndXIw/3dzJhRxZ2b5+s0iZDvl6IUwvdhJjoemt5PAvmkVZZDGcuhyDLVzT9bIZcsVST7kcwHCdKY2kynKXUlGbi/PeXrlanCW+dJP+AfKpE2o4v1li1Rz1bTMy+arM2LiRvv/6zlFHmhnyazem878izfzvSDp2qmGbADPkMz45Pz/jk/8ORB/+b2LGB/8Z+cEn/5f5QZMa/xVK3/iv0AOf+0/qic/9I/bFF1844y+BADmJh2XlWAAAAABJRU5ErkJggg==' />
      </div>
    </div>
  )
}

export default header