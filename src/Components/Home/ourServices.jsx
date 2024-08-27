import React from 'react'

function OurServices() {
  return (
    <div>
      <div class="container mt-4 py-4">
        <h1>Services</h1>
        {/* <!-- card 1 --> */}
        <div class="d-flex align-items-center justify-content-between p-3
            p customise-style">
          <div><p class="mb-0 fs-6">01 Product Design</p></div>
          <div class="d-flex">
            <div class="py-2 px-3 rounded-4 bg-body-tertiary me-2"><p class="mb-0 fs-6">UI UX Design</p></div>
            <div class="py-2 px-3 rounded-4 bg-body-tertiary me-2"><p class="mb-0 fs-6">Saas Platform</p></div>
            <div class="py-2 px-3 rounded-4 bg-body-tertiary me-2"><p class="mb-0 fs-6">App Design</p></div>
          </div>
        </div>
        {/* <!-- card 2 --> */}
        <div class="d-flex align-items-center justify-content-between p-3
            p customise-style">
          <div><p class="mb-0 fs-6">02 Website Design</p></div>
          <div class="d-flex">
            <div class="py-2 px-3 rounded-4 bg-body-tertiary me-2"><p class="mb-0 fs-6">Landing Page</p></div>
            <div class="py-2 px-3 rounded-4 bg-body-tertiary me-2"><p class="mb-0 fs-6">Online Store</p></div>
            <div class="py-2 px-3 rounded-4 bg-body-tertiary me-2"><p class="mb-0 fs-6">Corporate Websites</p></div>
          </div>
        </div>

        <div class="d-flex align-items-center justify-content-between p-3
            p customise-style">
          <div><p class="mb-0 fs-6">03 Copywriting</p></div>
          <div class="d-flex">
            <div class="py-2 px-3 rounded-4 bg-body-tertiary me-2"><p class="mb-0 fs-6">Product Discriptions</p></div>
            <div class="py-2 px-3 rounded-4 bg-body-tertiary me-2"><p class="mb-0 fs-6">Blog Posts</p></div>
            <div class="py-2 px-3 rounded-4 bg-body-tertiary me-2"><p class="mb-0 fs-6">Website Copy</p></div>
          </div>
        </div>
      </div>
      </div>
      )
}

      export default OurServices