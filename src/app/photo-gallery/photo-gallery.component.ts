import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize, NgxGalleryLayout} from 'ngx-gallery';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            {
              width: '100%',
              height: '100%',
              imageAnimation: NgxGalleryAnimation.Slide,
              imageSize: NgxGalleryImageSize.Contain,
              layout: NgxGalleryLayout.ThumbnailsTop,
              thumbnailsColumns: 4,
              thumbnailsRows: 5,
              image: false,
            },
            {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20,
              imageSize: NgxGalleryImageSize.Contain,
              layout: NgxGalleryLayout.ThumbnailsTop,
              image: false
            },
            {
              breakpoint: 480,
              width: '100%',
              height: '100%',
              preview: true,
              imageSize: NgxGalleryImageSize.Contain,
              layout: NgxGalleryLayout.ThumbnailsTop,
              image: false,
              thumbnailsColumns: 4,
              thumbnailsRows: 5
            }
        ];

        this.galleryImages = [
            {
                small: '../../assets/gallery/pic1.jpg',
                medium:  '../../assets/gallery/pic1.jpg',
                big:  '../../assets/gallery/pic1.jpg'
            },
            {
                small: '../../assets/gallery/pic2.jpg',
                medium:  '../../assets/gallery/pic2.jpg',
                big:  '../../assets/gallery/pic2.jpg'
            },
            {
                small: '../../assets/gallery/pic3.jpg',
                medium:  '../../assets/gallery/pic3.jpg',
                big:  '../../assets/gallery/pic3.jpg'
            },
            {
                small: '../../assets/gallery/pic4.jpg',
                medium:  '../../assets/gallery/pic4.jpg',
                big:  '../../assets/gallery/pic4.jpg'
            },
            {
                small: '../../assets/gallery/pic5.jpg',
                medium:  '../../assets/gallery/pic5.jpg',
                big:  '../../assets/gallery/pic5.jpg'
            },
            {
                small: '../../assets/gallery/pic6.jpg',
                medium:  '../../assets/gallery/pic6.jpg',
                big:  '../../assets/gallery/pic6.jpg'
            },
            {
                small: '../../assets/gallery/pic7.jpg',
                medium:  '../../assets/gallery/pic7.jpg',
                big:  '../../assets/gallery/pic7.jpg'
            },
            {
                small: '../../assets/gallery/pic8.jpg',
                medium:  '../../assets/gallery/pic8.jpg',
                big:  '../../assets/gallery/pic8.jpg'
            },
            {
                small: '../../assets/gallery/pic9.jpg',
                medium:  '../../assets/gallery/pic9.jpg',
                big:  '../../assets/gallery/pic9.jpg'
            },
            {
                small: '../../assets/gallery/pic10.jpg',
                medium:  '../../assets/gallery/pic10.jpg',
                big:  '../../assets/gallery/pic10.jpg'
            },
            {
                small: '../../assets/gallery/pic11.jpg',
                medium:  '../../assets/gallery/pic11.jpg',
                big:  '../../assets/gallery/pic11.jpg'
            },
            {
                small: '../../assets/gallery/pic12.jpg',
                medium:  '../../assets/gallery/pic12.jpg',
                big:  '../../assets/gallery/pic12.jpg'
            },
            {
                small: '../../assets/gallery/pic13.jpg',
                medium:  '../../assets/gallery/pic13.jpg',
                big:  '../../assets/gallery/pic13.jpg'
            },
            {
                small: '../../assets/gallery/pic15.jpg',
                medium:  '../../assets/gallery/pic15.jpg',
                big:  '../../assets/gallery/pic15.jpg'
            },
            {
                small: '../../assets/gallery/pic15.jpg',
                medium:  '../../assets/gallery/pic15.jpg',
                big:  '../../assets/gallery/pic15.jpg'
            },
            {
                small: '../../assets/gallery/pic16.jpg',
                medium:  '../../assets/gallery/pic16.jpg',
                big:  '../../assets/gallery/pic16.jpg'
            },
            {
                small: '../../assets/gallery/pic17.jpg',
                medium:  '../../assets/gallery/pic17.jpg',
                big:  '../../assets/gallery/pic17.jpg'
            },
            {
                small: '../../assets/gallery/pic19.jpg',
                medium:  '../../assets/gallery/pic19.jpg',
                big:  '../../assets/gallery/pic19.jpg'
            },
            {
                small: '../../assets/gallery/pic19.jpg',
                medium:  '../../assets/gallery/pic19.jpg',
                big:  '../../assets/gallery/pic19.jpg'
            },
            {
                small: '../../assets/gallery/pic20.jpg',
                medium:  '../../assets/gallery/pic20.jpg',
                big:  '../../assets/gallery/pic20.jpg'
            }
        ];
    }
}
