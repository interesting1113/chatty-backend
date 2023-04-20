import cloudinary, { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

export function uploads(
	file: string,
	public_id?: string,
	overwrite?: boolean,
	ivalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {}
