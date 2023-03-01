<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
			'description' => $this->description,
            'thumbnail' => $this->thumbnail ? asset('storage/' . $this->thumbnail) : null,
            'content' => $this->content,
            'images' => $this->whenLoaded('images')->pluck('name_image') ? $this->whenLoaded('images')->pluck('name_image')->map(function ($image) {
                return asset('storage/' . $image);
            }) : null,
            'video' => $this->video ? asset('storage/' . $this->video) : null,
            'created_at' => date_format($this->created_at, 'd-m-Y H:i:s'), // 'd-m-Y H:i:s
            'author' => $this->whenLoaded('user')->full_name,
            'category' => $this->whenLoaded('category')->name_category,
        ];
    }
}
