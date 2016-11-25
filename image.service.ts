export class ImageService {
  private data: string[] = [];

  addData(input: string) {
    this.data.push(input);
  }
  getData() {
    return this.data;
  }
}